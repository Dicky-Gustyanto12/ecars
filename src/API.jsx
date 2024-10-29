import React, { useEffect } from "react";

function PokemonLogger() {
  const getPokemons = async () => {
    try {
      const response = await fetch("");
      const data = await response.json();
      console.log(data); // Log data Pokémon ke console
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  // Panggil getPokemons saat komponen pertama kali dirender
  useEffect(() => {
    getPokemons();
  }, []);

  return null; // Tidak ada tampilan yang dirender
}

export default PokemonLogger;
