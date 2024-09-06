//() Array para almacenar los autos
      let autos = [];

      function agregarAuto() {
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const anio = document.getElementById('anio').value;
        const precio = document.getElementById('precio').value;

        if (marca && modelo && anio && precio) {
          // Crear un objeto auto
          const auto = { marca, modelo, anio, precio };

          // Añadir al array de autos
          autos.push(auto);

          // Limpiar el formulario
          document.getElementById('autoForm').reset();

          // Renderizar la tabla
          renderTable();
        } else {
          alert('Por favor, complete todos los campos.');
        }
      }

      function eliminarAuto(index) {
        // Eliminar del array
        autos.splice(index, 1);

        // Renderizar la tabla
        renderTable();
      }

      function renderTable() {
        const tbody = document.getElementById('autoTableBody');
        tbody.innerHTML = '';

        autos.forEach((auto, index) => {
          const row = document.createElement('tr');

          row.innerHTML = `
                    <td>${auto.marca}</td>
                    <td>${auto.modelo}</td>
                    <td>${auto.anio}</td>
                    <td>${auto.precio}</td>
                    <td><button class="btn btn-danger btn-delete" onclick="eliminarAuto(${index})">Eliminar</button></td>
                `;

          tbody.appendChild(row);
        });
      }