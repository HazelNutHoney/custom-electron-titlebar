// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { Titlebar, TitlebarColor } = require("../../")

const options = {
    // titlebarColorBlur: false --Remove the titlebar blurring when you unfocus the window.
}

window.addEventListener("DOMContentLoaded", () => {
    new Titlebar(options);
});
