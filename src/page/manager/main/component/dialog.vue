<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="款式名称" prop="cname">
        <el-input v-model="clothes.cname" ></el-input>
      </el-form-item>
      <el-form-item label="款式编号" prop="style">
        <el-input v-model="clothes.style" ></el-input>
      </el-form-item>
      <el-form-item label="推荐尺码" prop="size">
        <el-input v-model="clothes.size" ></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="clothes.sex" size="medium">
          <el-radio v-for="(item, index) in sexOptions" :key="index" :label="item.value"
                    :disabled="item.disabled">{{item.label}}</el-radio>
        </el-radio-group>
      </el-form-item>
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
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="clothesUpdate">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import {clothesUpdate} from '../../../../api/clothes'

export default {
  name: 'dialog',
  data () {
    return {
      dialogVisible: false,
      clothes: {},
      imageUrl: '',
      sexOptions: [{
        'label': '男',
        'value': '男'
      }, {
        'label': '女',
        'value': '女'
      }]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    show (clothes) {
      this.clothes = clothes
      this.dialogVisible = true
      this.imageUrl = clothes.picture
    },
    handleAvatarSuccess (res, file) {
      this.formData.picture = res.url
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    clothesUpdate () {
      clothesUpdate(this.clothes).then(res => {
        if (res.status) {
          this.dialogVisible = false
          this.$message({
            message: '编辑成功',
            type: 'success'
          })
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
