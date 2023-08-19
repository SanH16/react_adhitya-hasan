# Task
## Soal Prioritas 1 (Nilai 80)
1. Buatlah sebuah repository github yang sesuai dengan namaKelas_namaKalian.

<p align="center">
    <img src="https://github.com/SanH16/react_adhitya-hasan/blob/main/02_Git/Screenshots/01_membuat-repository.png">
</p>

2. Buatlah folder yang berurutan dan diberi nama sesuai dengan nama soal yang kalian kerjakan. contoh penamaan
1_GIthub
2_HTML
3_CSS
seterusnya sesuai dengan nama soal yang kalian kerjakan. buat folder tersebut sampai materi terakhir.

<p align="center">
    <img src="https://github.com/SanH16/react_adhitya-hasan/blob/main/02_Git/Screenshots/02_membuat-folder.png">
</p>

3. Pada setiap folder akan berisikan sub folder lagi

<p align="center">
    <img src="https://github.com/SanH16/react_adhitya-hasan/blob/main/02_Git/Screenshots/03_membuat-sub-folder.png">
</p>

## Soal Prioritas 2 (Nilai 20)

4. Buatlah branch baru pada github yang kalian buat.

<p align="center">
    <img src="https://github.com/SanH16/react_adhitya-hasan/blob/main/02_Git/Screenshots/04_membuat-branch.png">
</p>

5. Lakukan Pull Request pada branch tersebut sehingga akan menambah hal baru pada branch main/master.

<p align="center">
    <img src="https://github.com/SanH16/react_adhitya-hasan/blob/main/02_Git/Screenshots/05_pull-request.png">
</p>


<p align="center">
    <img src="https://github.com/SanH16/react_adhitya-hasan/blob/main/02_Git/Screenshots/06_merged.png">
</p>

## Soal eksplorasi (Nilai 20)
1. Dengan project terserah kalian, praktikkan salah satu workflow serderhana dan buktikan dengan Screenshoot. Github flow/gitflow/trunkbase

### Github flow : 

<p align="center">
    <img src="https://github.com/SanH16/react_adhitya-hasan/blob/feat/02_Git-update/02_Git/Screenshots/01_soal-eksplorasi.png">
    
</p>

# Resume Materi KMReact - Version Control and Branch Management (Git)
## 3 Poin penting

### - Git dan Github 
Git merupakan tools Version Control System berbasis Command Line (CLI) untuk memanajemen branch, melakukan perubahan commit, membuat repository, menghubungkan repository lokal ke remote repository dan lain-lain menggunakan perintah Command Line. Sedangkan Github merupakan tempat atau wadah sebagai pendukung Git dengan repository, github dapat memudahkan memanajemen suatu branch apabila kesulitan dalam menggunakan Command Line.

### - Git Workflow
Git Workflow Collaboration adalah kerangka kerja yang divisualisasikan agar dapat mempermudah kerja sama tim developer dalam melakukan pengembangan projek. Adapun 4 kerangka yang sering digunakan :
- Master atau main : menampung semua pekerjaan yang telah fix bug atau final result dari hasil merge branch sebelumnya.
- Develop : cabang branch untuk menampung fitur yang dibuat melalui branch feature, branch ini akan melakukan pengujian sistem, perbaikan code, sebelum di push ke main branch. 
- Feature : berisikan semua history pekerjaan developer yang ditampung dalam branch feature sebelum di merge ke branch develo, branch feature menggunakan develop sebagai parent.


### - Syntax Git CLI
- git init : menginisiasi repository sebelum dilakukan perubahan.
- git add : menambahkan semua perubahan ke dalam staging area.
- git commit : memindahkan perubahan dari staging area kedalam local repository dan siap untuk di push ke branch.
- git push origin : melakukan push dari local repository ke remote repository.
- git config : konfigurasi username dan email untuk menghubungkan repository local dengan remote repository.
- git clone : menduplikasi remote repository kedalam local repository.
- git pull : menarik history push dari parent branch kedalam cabang branch.
- git stash : menyimpan perubahan sementara kedalam stash apabila ingin berpindah branch tanpa menghilangkan perubahan history.
- git checkout : perintah untuk melakukan perpindahan branch yang tersedia.
- git log : melihat kode hash dari history perubahan suatu branch. 