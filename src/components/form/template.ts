export const template = `
if typeForm === "chat"
  .chat-content__input
    #{message}
  if btn
    #{btn}
  .container-form__footer
    #{link}
else if typeForm === "createChat"
  .create-user-input
    #{title}
  if btn
    #{btn}
  .container-form__footer
    #{link}
else if typeForm === "addUser"
  .create-user-input
    #{user_id}
  if btn
    #{btn}
  .container-form__footer
    #{link}
else
  .header-page-form.text-title.mb-10 #{title}
  .container-form__field.mb-4
    if typeForm === "registration" || typeForm === "profile"
        if typeForm === "profile"
            #{avatar}
        #{display_name}
        #{first_name}
        #{second_name}
        #{login}
        #{email}
        #{phone}
    if typeForm === "auth"
        #{login}
        #{password}       
    if typeForm === "changePassword"
        #{password}
        #{oldPassword}
        #{newPassword}     
    if typeForm === "changeProfile"
        #{display_name}
        #{email}
        #{login}
        #{first_name}  
        #{second_name}  
        #{phone}  
    
  if btn
    #{btn}
  .container-form__footer
      #{navigation}
      #{link}
      
if errorTextForm
    .error-text-form #{errorTextForm}
`;
