{@each data.places as item,index}
  <li class='sp-li' data-index=${index}>
    <h2>
      ${item.placeName}
    </h2>
    <p>
      ${item.placeAddress}
    </p>
  </li>

{@/each}
