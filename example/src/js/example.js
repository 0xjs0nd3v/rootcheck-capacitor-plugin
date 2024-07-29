import { RootCheckPlugin } from 'rootcheck-capacitor-plugin';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    RootCheckPlugin.echo({ value: inputValue })
}
