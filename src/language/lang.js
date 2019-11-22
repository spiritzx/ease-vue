// 国际化
import Vue from "vue";
import VueI18n from "vue-i18n";
// 中文语言包
import cn from "./config/cn";
// 英文语言包
import en from "./config/en";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "cn", // 语言标识
  messages: {
    cn: cn,
    en: en
  }
});

export default i18n;
