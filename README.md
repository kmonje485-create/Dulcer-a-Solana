CandyChain — Gestión de Dulcería en Solana

CandyChain es un programa on-chain desarrollado en Rust con Anchor sobre la blockchain de Solana.
Permite a dueños de dulcerías gestionar sus productos de forma descentralizada, transparente e inmutable.

📌 ¿Qué hace el proyecto?

CandyChain implementa un sistema CRUD completo para administrar una dulcería.

El sistema permite:

Crear una dulcería vinculada a tu wallet (owner)

Registrar dulces con nombre, precio y cantidad

Eliminar dulces cerrando su cuenta en la blockchain

Activar o desactivar la venta de un dulce

Actualizar precio o cantidad de un dulce

Cada dulcería y cada producto son cuentas derivadas (PDA) en la blockchain de Solana.

Esto garantiza que:

No existan duplicados

Solo el owner autorizado pueda modificar los datos

La información sea segura e inmutable

🏗️ Arquitectura del sistema
Owner (Wallet)
    │
    └── Dulceria (PDA)
            │
            ├── Dulce A (PDA)
            ├── Dulce B (PDA)
            └── Dulce C (PDA)

El owner es la wallet que controla la dulcería.

Cada dulce está vinculado a esa dulcería.

📦 Structs principales
Dulceria
Campo	Tipo	Descripción
owner	Pubkey	Wallet del dueño
nombre	String	Nombre de la dulcería
dulces	Vec<Pubkey>	Lista de productos
Dulce
Campo	Tipo	Descripción
dulceria	String	Nombre de la dulcería
nombre	String	Nombre del dulce
precio	u16	Precio del dulce
cantidad	u16	Cantidad disponible
activo	bool	Si el dulce está a la venta
⚙️ Instrucciones del programa (CRUD)
Instrucción	Descripción
crear_dulceria(nombre)	Crea la cuenta de la dulcería
registrar_dulce(nombre, precio, cantidad)	Registra un nuevo dulce
eliminar_dulce(nombre)	Elimina el dulce del sistema
alternar_dulce(nombre)	Activa o desactiva la venta
actualizar_dulce(nombre, precio, cantidad)	Actualiza precio o stock
🔐 PDAs (Program Derived Addresses)

Las cuentas se derivan usando seeds.

Dulcería
["dulceria", nombre_dulceria, owner_pubkey]
Dulce
["dulce", nombre_dulce, owner_pubkey]

Esto garantiza que:

✔ Cada owner tenga su propia dulcería
✔ No existan dos dulces con el mismo nombre
✔ Solo el dueño pueda modificar los datos

🚀 Cómo usar el proyecto (Solana Playground)

1️⃣ Abre Solana Playground

2️⃣ Haz fork del repositorio

3️⃣ Pega el código en:

src/lib.rs

4️⃣ Conecta tu wallet (devnet)

5️⃣ Presiona:

Build

6️⃣ Luego:

Deploy

7️⃣ Usa el panel Test para interactuar con el programa.

🧪 Ejemplo de flujo del sistema
1. crear_dulceria("DulcesKevin")

2. registrar_dulce("Chocolate", 20, 50)

3. registrar_dulce("Paleta", 10, 100)

4. alternar_dulce("Paleta")
   → desactiva la venta

5. actualizar_dulce("Chocolate", 25, 80)
   → cambia precio y stock

6. eliminar_dulce("Paleta")
   → elimina el producto
🛠️ Tecnologías utilizadas
Tecnología	Uso
Solana	Blockchain
Anchor Framework	Framework para programas
Rust	Lenguaje del smart contract
Solana Playground	Desarrollo y pruebas
👤 Autor

Proyecto desarrollado por Kevin Monje Beltrán como parte de prácticas con programación blockchain en Solana.
