function hitungHarga() {
  const namaParfum = document.getElementById("namaParfum").value;
  const volume = document.getElementById("volume").value;

  if (!namaParfum || !volume) {
    alert("Silakan pilih nama parfum dan ukurannya.");
    return;
  }

  let hargaPerMl;

  switch (namaParfum) {
    case "HNMS":
      hargaPerMl = 1000;
      break;
    case "ONIX":
      hargaPerMl = 1500;
      break;
    case "MYKRONOS":
      hargaPerMl = 2000;
      break;
    default:
      hargaPerMl = 0;
  }

  const totalHarga = hargaPerMl * volume;
  document.getElementById("totalHarga").innerText = `RP. ${totalHarga}`;
}
