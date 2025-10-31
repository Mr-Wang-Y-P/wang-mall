/*
 * @Author: 汪迎平
 * @Date: 2025-10-31 11:04:22
 * @LastEditTime: 2025-10-31 13:43:41
 * @LastEditors: 汪迎平
 * @Description: main.ts
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import {
  Icon,
  Lazyload,
} from "vant";

// Toast
import "vant/es/toast/style";

// Dialog
import "vant/es/dialog/style";

// Notify
import "vant/es/notify/style";

// ImagePreview
import "vant/es/image-preview/style";

const app = createApp(App);
app.use(Icon);

app.use(router);
app.use(Lazyload, {
  lazyComponent: true,
});

app.mount("#app");
