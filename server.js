const express = require('express');
const PORT = 3000;

app.use('/static', express.static(__dirname + '/public'));

app.listen(PORT, () => {
    console.log(`Мой текст в логе после запуска ${PORT}!`);
});
