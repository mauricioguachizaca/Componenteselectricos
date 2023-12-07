import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const redirigirAWeb = () => {
    // Cambia la URL a la que quieres redirigir
    window.location.href = 'http://localhost:9000/informacion';
  };
const wed2 = () => {
  window.location.href = 'http://localhost:9000/perfil';
}
const wed3 = () => {
  window.location.href ='http://localhost:9000/medidor';
};

export const Inicio = () => {
  return (
    <div className="App background-image">
    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
      <Button onClick={redirigirAWeb} variant="text" style={{ margin: '10px', border: '2px solid green', color: 'black' }}>
        Informacion
      </Button>
    </Stack>
    <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
        <Button onClick={wed2} variant="text" style={{ margin: '10px', border: '2px solid green', color: 'black' }}>
          Perfil
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', alignItems: 'center', height: '15vh' }}>
        <Button onClick={wed3} variant="text" style={{ margin: '10px', border: '2px solid green', color: 'black' }}>
          Medidor
        </Button>
      </Stack>
      </div>
  )
}
