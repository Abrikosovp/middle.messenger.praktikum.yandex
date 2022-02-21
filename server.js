// Express уже установлен, можно пользоваться
const express = require('express');
const PORT = 3000;


// Здесь нужно написать роут для отдачи статики
// Все пути считаются относительно переменной __dirname
// Подробнее про __dirname можно прочитать здесь https://nodejs.org/api/modules.html#modules_dirname
app.use('/static', express.static(__dirname + '/public'));
app.engine('pug', require('pug').__express);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');


app.listen(PORT, () => {
    console.log(`Мой текст в логе после запуска ${PORT}!`);
});
