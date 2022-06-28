<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="formData" :model="formData" :rules="rules" size="medium"  label-width="100px" >
        <el-col :span="12" :offset="6">
          <el-form-item label="款式名称" prop="cname">
            <el-input v-model="formData.cname" placeholder="请输入款式名称" clearable :style="{width: '100%'}"
                      required="required">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="6">
          <el-form-item label="推荐尺码" prop="size">
            <el-input v-model="formData.size" placeholder="请输入推荐尺码" clearable :style="{width: '100%'}" required="required">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="6">
          <el-form-item label="款式编号" prop="style">
            <el-input v-model="formData.style" placeholder="请输入款式编号" clearable :style="{width: '100%'}" required="required">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="6">
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="formData.sex" size="medium">
              <el-radio v-for="(item, index) in sexOptions" :key="index" :label="item.value"
                        :disabled="item.disabled">{{item.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="6">
          <el-form-item label="图片" prop="picture">
            <el-upload
              class="avatar-uploader"
              action="/api/file/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="6">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm('formData')">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import {addClothes} from '../../../../api/clothes'

export default {
  name: 'style2',
  components: {},
  props: [],
  data () {
    return {
      formData: {
        cname: '',
        size: '',
        style: '',
        sex: '',
        picture: ''
      },
      imageUrl: '',
      rules: {
        cname: [{
          required: true,
          message: '请输入款式名称',
          trigger: 'blur'
        }],
        size: [{
          required: true,
          message: '请输入推荐尺码',
          trigger: 'blur'
        }],
        style: [{
          required: true,
          message: '请输入款式编号',
          trigger: 'blur'
        }],
        sex: [{
          required: true,
          message: '性别不能为空',
          trigger: 'change'
        }]
      },
      sexOptions: [{
        'label': '男',
        'value': '男'
      }, {
        'label': '女',
        'value': '女'
      }]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleAvatarSuccess (res, file) {
      this.formData.picture = res.url
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    resetForm () {
      this.$refs['formData'].resetFields()
    },
    submitForm (formData) {
      this.$refs[formData].validate((valid) => {
        if (valid) {
          addClothes(this.formData).then(res => {
            this.$message({
              message: '提交成功',
              type: 'success'
            })
            console.info(res)
          })
        } else {
          this.$message.error('输入不能为空！')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #000000;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
