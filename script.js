function startScan() {
    const result = document.getElementById("result");
    result.innerHTML = "Escaneando...";

    setTimeout(() => {
        const vulnerabilities = [
            "Advertencia actividad inusual detectada. Por favor, revise su sistema.",
            "Alerta de seguridad se ha encontrado un archivo sospechoso. ¿Desea eliminarlo?",
            "Atención se ha detectado un cambio en la configuración del sistema. Esto puede indicar malware.",
            "Posible amenaza su dispositivo está mostrando un uso de recursos elevado. Recomendamos analizar en profundidad.",
            "Advertenciaconexión sospechosa detectada. Se recomienda bloquear el acceso.",
            "Todo seguro ,no se han detectado amenazas en su sistema. Su dispositivo está funcionando correctamente y no presenta signos de actividad sospechosa. Puede continuar usando su equipo con tranquilidad, aunque es recomendable realizar análisis regulares para mantener la seguridad.",
        ];
        const random = vulnerabilities[Math.floor(Math.random() * vulnerabilities.length)];
        result.innerHTML = `Resultado: ${random}`;
    }, 2000);
}
