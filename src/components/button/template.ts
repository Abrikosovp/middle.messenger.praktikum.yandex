export const template = `
append head-content
    link(href="./button.scss" rel="stylesheet")
.container-btn    
    button(disabled=disabled class=btnDisabled ? "custom-bn" : "custom-bn btn-hover" type="submit")
      span.custom-bn__span #{text}`
