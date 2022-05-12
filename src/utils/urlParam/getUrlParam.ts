export function getUrlParam() {
    return new URL(window.location.href).searchParams.get('chatId');
}
