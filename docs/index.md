# 📡 IoT con AI - Documentación

Esta documentación cubre el desarrollo de un sistema IoT con integración de inteligencia artificial para la recolección, procesamiento y toma de decisiones basada en datos.

## 📌 Introducción

El **Internet de las Cosas (IoT)** permite la conexión de dispositivos físicos a la red, recopilando y transmitiendo datos en tiempo real. Al combinarlo con **inteligencia artificial (AI)**, se pueden analizar grandes volúmenes de datos y tomar decisiones automatizadas.

🔹 **Objetivo:** Diseñar y desarrollar un sistema IoT con procesamiento en backend e integración de un modelo de AI para análisis de datos.  
🔹 **Hardware:** Se utilizarán microcontroladores como **ESP32, Arduino y PSoC5** para la adquisición de datos.  
🔹 **Software:** Se implementará en **Python, JavaScript y frameworks como TensorFlow Lite** para la inferencia de AI.

---

## 🛠️ **Componentes del Proyecto**

El sistema se compone de:

### 1️⃣ **Sensores**

Los sensores recopilan información del entorno. Algunos ejemplos son:

- 🌡 **DHT22**: Temperatura y humedad.
- 📷 **Cámara OV2640**: Captura de imágenes para procesamiento con AI.
- 💡 **LDR**: Medición de intensidad lumínica.
- 🏋 **Celdas de carga**: Para pesaje y monitoreo de presión.

### 2️⃣ **Dispositivos de Procesamiento**

Los datos se procesan en microcontroladores y servidores:

- **ESP32** → Preprocesamiento básico y conexión WiFi/Bluetooth.
- **Servidor Backend (Raspberry Pi o Cloud)** → Procesamiento avanzado con AI.

### 3️⃣ **Actuadores**

Los actuadores responden a comandos basados en el análisis de los datos.  
Ejemplos:

- 🔔 **Alarmas** activadas por detección de patrones anómalos.
- 🚦 **Luces y motores** activados según datos procesados.
- 🔧 **Válvulas inteligentes** en sistemas industriales.

---

## 🔀 **Flujo de Datos IoT + AI**

El flujo del sistema se puede representar así:

<div style="display: flex; justify-content: center;">
``` mermaid
graph TD;
  A[Sensor] -->|Datos| B[ESP32];
  B -->|Preprocesamiento| C[Servidor];
  C -->|Inferencia AI| D[Decisión];
  D -->|Comando| E[Actuador];
```
</div>

✅ **Los datos de los sensores se procesan en el ESP32** antes de ser enviados al backend.  
✅ **El servidor ejecuta modelos de AI para predecir o clasificar datos en tiempo real.**  
✅ **El resultado del análisis se traduce en acciones sobre actuadores.**

---

## 📊 **Procesamiento con Inteligencia Artificial**

Los datos del sistema se analizan con **Machine Learning y Deep Learning**. Algunos modelos aplicables:

- 📈 **Regresión Lineal** → Para predecir valores continuos, como temperatura futura.
- 🏷️ **Clasificación con Redes Neuronales** → Para distinguir entre eventos normales y anómalos.
- 🎭 **Visión Computacional** → Detección de objetos en imágenes con **YOLO o MobileNet**.

### 🔥 **Ejemplo de aplicación: Mantenimiento Predictivo**

1. Se recopilan datos de vibraciones en motores.
2. Se procesan con una red neuronal para detectar patrones inusuales.
3. Se emite una alerta antes de que ocurra una falla.

---

## 🚀 **Plataformas y Frameworks Utilizados**

Para el desarrollo de este sistema, se utilizarán las siguientes herramientas:

- 🔹 **Microcontroladores**: Arduino, ESP32, PSoC5.
- 🔹 **Backend**: Python con Flask o FastAPI.
- 🔹 **Bases de datos**: InfluxDB, Firebase o PostgreSQL.
- 🔹 **Frameworks de AI**: TensorFlow Lite, OpenCV para visión.
- 🔹 **Comunicación**: MQTT, HTTP y WebSockets.

---

## ⚡ **Integración Backend y Frontend**

El sistema IoT se comunica con un backend que maneja los datos en tiempo real y una interfaz web para visualización.

- 📡 **Backend**: API con Flask/FastAPI para recibir y procesar datos.
- 📊 **Frontend**: Dashboard en React o una interfaz ligera en MkDocs.

Ejemplo de interacción:
1️⃣ El ESP32 envía datos de temperatura al backend.  
2️⃣ El backend los analiza con AI y decide si activar una alarma.  
3️⃣ La información se muestra en un **dashboard en tiempo real**.

---

## 🖥️ **Interfaz Web de Control**

El sistema contará con una **interfaz de usuario** que mostrará los datos en tiempo real, gráficos y permitirá enviar comandos manuales a los dispositivos IoT.

✅ 📊 **Gráficos de sensores en vivo**.  
✅ 🏭 **Monitoreo de dispositivos conectados**.  
✅ 🔔 **Notificaciones y alertas en caso de anomalías**.

---

## 🔧 **Despliegue y Mantenimiento**

### 🔹 **Fases del Despliegue**

1. Desarrollo y prueba en local con `mkdocs serve`.
2. Configuración de despliegue en GitHub Pages.
3. Integración con servidor en la nube o Raspberry Pi.
4. Monitoreo y ajustes de rendimiento.

---

## **Botones interactivos**

📌 **Botón para volver arriba y activar el modo lector:**

<button id="btn-top" aria-label="Back to Top">
  <i class="material-icons">arrow_upward</i>
</button>

<button id="reader-mode"  aria-label="Activate reading mode">📖 Modo Lector</button>

<div id="font-controls">
  <button onclick="setFontSize('normal')">A</button>
  <button onclick="setFontSize('large')">A+</button>
  <button onclick="setFontSize('xlarge')">A++</button>
</div>

<script>
  document.getElementById('btn-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('reader-mode').addEventListener('click', function() {
    document.body.classList.toggle('reader-mode');
  });

   function setFontSize(size) {
    let root = document.documentElement;
    if (size === 'normal') root.style.setProperty('--font-size', '1rem');
    if (size === 'large') root.style.setProperty('--font-size', '1.2rem');
    if (size === 'xlarge') root.style.setProperty('--font-size', '1.5rem');
  }

</script>

<script defer src="scripts/init-mermaid.js"></script>
<script defer src="scripts/main.js"></script>
