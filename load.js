document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    
    if (mainContent) {
        mainContent.innerHTML = `
            <h1>Todo sobre gatos: mascotas independientes y elegantes</h1>
            <p>¡Bienvenido al hogar de los bigotes y las ronroneadas!<p>

            <p>Aquí los gatos no son solo mascotas… son jefes supremos con mucha personalidad. Descubre curiosidades, consejos prácticos, razas fascinantes y todo lo que necesitas saber para vivir con estos pequeños tiranos de terciopelo que nos han conquistado el corazón (y el sofá).
Porque un día sin gato… es solo un día normal. 😻<p>
            
            <p>Los gatos son animales fascinantes. Razas como el siamés son muy vocales y elegantes, mientras que los persas destacan por su pelaje largo y carácter tranquilo. Son ideales para apartamentos y personas que buscan compañía relajada.</p>
            
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800" alt="Gato siamés mirando a cámara" style="max-width:400px;">
            
            <p>Más información: Los gatos ronronean para mostrar bienestar, duermen entre 12 y 16 horas al día y son muy limpios por naturaleza.</p>
        `;
        
        // También cambiamos el título de la página para que coincida
        document.title = "Guía de Gatos Adorables";
    }
});
