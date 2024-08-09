import React from 'react';
import BotonPar from './BotonPar';
import BotonImpar from './BotonImpar';

export default function TableBody() {
  const data = [
    { name: "Davinia", lastname: "de la Rosa" },
    { name: "Pedro", lastname: "Pérez" }
  ];

  return (
    <tbody>
      {data.map((item, index) => ( index%2 === 0 ? 
        <tr>
          <td>{item.name}</td>
          <td>{item.lastname}</td>
          <td><BotonPar/></td>
        </tr>
        :
        <tr>
          <td>{item.name}</td>
          <td>{item.lastname}</td>
          <td><BotonImpar/></td>
        </tr>
      ))}
    </tbody>
  );
}