// configuración conexión a base de datos
import { Sequelize } from "sequelize";

//  process.env.DB_PASSWORD: ya no es necesario usar el paquete dotenv
const db = new Sequelize(
  "programacionv",
  "root",
  process.env.DB_PASSWORD || "",//contraseña
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    // agregar estampas de tiempo a cada nuevo registro
    define: {
      timestamps: true,
    },
    // configuracion del pool de conexiones
    // 5 conexiones maximas por usuario
    // idle: tiempo de espera para liberar una conexion //Cierra sesion luego de un tiempo
    // acquire: tiempo de espera para obtener una conexion
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 30000, //30 Segundos
    },
    operatorsAliases: false,
  }
);

export default db;