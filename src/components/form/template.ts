export const template = `
.header-page-form.text-title.mb-10 #{title}
.container-form__field.mb-4
  #{avatar}
  #{avatar}
  #{firstName}
  #{secondName}
  #{login}
  #{email}
  #{phone}
  #{password}
#{btn}
.container-form__footer
    a(href=urlPage).container-form__footer-link #{urlMessage}
`;
