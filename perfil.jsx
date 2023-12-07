import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../App.css";

export const Perfil = () => {
  const [data, setdata] = useState({
    nombre: "",
    apellido: "",
    ID: "",
    provincia: "",
  });
  const {} = data;
  const obtenerDatos = ({ target }) => {
    const { name, value } = target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  
  const penticionpost = (e) => {
    e.preventDefault();
    var url = "http://localhost:3000/usuarios";
    console.log('DATOS DENTRO DE LA REQUEST',data);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response), toast.success('REGISTRO EXITOSO'));
  };

  const [userData, setUserData] = useState({
  nombre: "",
  apellido: "",
  ID: "",
  provincia: "",
});


const handleSearch = async (e) => {
  e.preventDefault();
  const inputName = e.target.parentElement.querySelector('input[name="nombre"]').value;
  await buscarUsuario(inputName);
};

const buscarUsuario = async (nombre) => {
  try {
    var url = `http://localhost:3000/usuarios/buscar/${nombre}`;
    console.log(url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error al buscar el usuario.");
    }

    const data = await response.json();

    if (data) {
      setUserData(data);
      toast.success('Usuario Encontrado');
      // Puedes mostrar los datos directamente en el componente aquí
      console.log("Datos del Usuario:", data);
    } else {
      toast.error('No se encuentra ese usuario');
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error('Error al buscar el usuario');
  }
};


  return (
    <div className="App background-image">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <form onSubmit={penticionpost}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h1 variant="h1" style={{ textAlign: "center", color: "red" }}>
              Inicio Post
            </h1>
            <div>
              <TextField
                error
                id="outlined-error"
                label="Nombre"
                defaultValue="Hello World"
                name="nombre"
                value={data.nombre}
                onChange={obtenerDatos}
                inputProps={{ style: { color: "black" } }}
              />
            </div>
            <div>
              <TextField
                error
                id="outlined-error"
                label="Apellido"
                defaultValue="Hello World"
                name="apellido"
                value={data.apellido}
                onChange={obtenerDatos}
                inputProps={{ style: { color: "black" } }}
              />
            </div>
            <div>
              <TextField
                error
                id="outlined-error"
                label="Cedula"
                defaultValue="Hello World"
                name="ID"
                value={data.ID}
                onChange={obtenerDatos}
                inputProps={{ style: { color: "black" } }}
              />
            </div>
            <div>
              <TextField
                error
                id="outlined-error"
                label="Provincia"
                defaultValue="Hello World"
                name="provincia"
                value={data.provincia}
                onChange={obtenerDatos}
                inputProps={{ style: { color: "black" } }}
              />
            </div>
          </Box>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
            }}
          >
            <Button
              variant="text"
              type="submit"
              style={{ margin: "10px", border: "1px solid red", color: "red" }}
            >
              Registar
            </Button>
          </Stack>
        </form>
      </Grid>
      <div style={{ textAlign: "center", lineHeight: "10vh" }}>
        <h1>Busca el tu usuario por el nombre:</h1>
        <input
          noValidate
          autoComplete="off"
          className="mi-input"
          type="text"
          name="nombre"
          placeholder="Ingrese su nombre"
        ></input>
        <Button
          variant="text"
          type="button"
          onClick={handleSearch} 
          style={{ margin: "10px", border: "2px solid green", color: "black" }}>Buscar</Button>
          
        <ToastContainer  position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="light" />
        {userData && (
        <div>
        <h2>Datos del Usuario:</h2>
        <p>Nombre: {userData.nombre}</p>
        <p>Apellido: {userData.apellido}</p>
        <p>ID: {userData.ID}</p>
       <p>Provincia: {userData.provincia}</p>
 
       </div>
     )}

      
    
      </div>
    </div>
  );
};
export default Perfil;
