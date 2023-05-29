import React from 'react'
import KotakTeks from "./KotakTeks"
import "./Tombol"
import Tombol from './Tombol'

function Login() {
  return (
    <>
        <KotakTeks name="password"/>
        <KotakTeks name="teks"/>
        <Tombol />
    </>
  )
}

export default Login