export const template = `
if typeForm === "chat"
  .chat-content__input
    #{message}
  #{btn}
else
  .header-page-form.text-title.mb-10 #{title}
  .container-form__field.mb-4
    if typeForm === "registration" || typeForm === "profile"
        if typeForm === "profile"
            #{avatar}
        #{first_name}
        #{second_name}
        #{login}
        #{password}
        #{email}
        #{phone}
    if typeForm === "auth"
        #{login}
        #{password}    
  #{btn}
  .container-form__footer
      #{link}
`;
