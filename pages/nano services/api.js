"use cliente"
import react from "react"


function handleError(error) {
  console.error('API Error:', error.message);
}

function getData() {
  try {
    // llamada a la API
  } catch (error) {
    handleError(error);
  }
}

module.exports = { getData };
