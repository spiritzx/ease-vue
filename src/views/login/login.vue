<template>
  <div class="login">
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      class="ruleForm"
    >
      <el-form-item label="账号：" prop="account">
        <el-input v-model="ruleForm2.account"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm2.pass"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">
          登录
        </el-button>
        <el-button @click="resetForm('ruleForm2')">
          取消
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm2: {
        pass: "",
        account: ""
      },
      rules2: {
        pass: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        account: [{ required: true, message: "账号不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$Http
            .postRequest("/mock/login", {
              user: this.ruleForm2.account,
              pass: this.ruleForm2.pass
            })
            .then(res => {
              if (res.code == 1000) {
                this.$store.dispatch("auth/setAuthTagFn", true);
                this.$store.dispatch("auth/setUserFn", res);
                this.$router.push("/");
                this.$message({
                  message: "登录成功",
                  type: "success"
                });
              } else {
                this.$message({
                  message: res.msg,
                  type: "error"
                });
              }
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.ruleForm {
  width: 400px;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(150, 150, 150, 0.6);
  padding: 20px;
  border-radius: 6px;
}
</style>
