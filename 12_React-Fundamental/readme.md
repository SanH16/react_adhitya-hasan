# Resume Materi KMReact - React Fundamental

## 3 Poin penting

### - JSX

Dalam library react, JavsScript XML (JSX) sangat sering digunakan untuk compile teknologi penulisan code dari HTML menjadi standar penulisan code JSX. Karena konsep dari Library React adalah berbasis komponen, maka semua code html dapat disimpan ke dalam function yang dibungkus dalam komponen agar dapat dirender solusinya adalah dengan compile html tesebut menjadi JSX.

### - React Lifecycle

Siklus kerja atau konsep suatu komponen dirender ada 3 Fase :
Fase Mounting

- constructor() akan dipanggil kemudian dilakukan render() dan memperbarui DOM kemudian componentDidMount() dipanggil setelah komponen dirender untuk pertama kalinya.

Fase Updating

- componentDidUpdating() method ini dipanggil setelah komponen di-render ulang, biasanya jika terjadi perubahan props atau state yang memerlukan rendering ulang serta update DOM.

Fase Unmounting

- componentWillUnmounting() method ini dipanggil sebelum komponen dihapus dari DOM .

### - Jenis Komponen React

Ada dua jenis komponen React, yaitu stateful component dan stateless component.

- Stateful component adalah komponen yang memiliki state. State adalah data yang dapat berubah selama komponen dijalankan. Stateful component biasanya digunakan untuk membuat komponen yang dapat berinteraksi dengan pengguna atau menerima data dari API.
- Stateless component adalah komponen yang tidak memiliki state. Stateless component digunakan untuk membuat komponen yang tidak perlu menyimpan data atau berinteraksi dengan pengguna.
