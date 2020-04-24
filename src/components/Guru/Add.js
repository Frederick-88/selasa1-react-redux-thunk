import React, { useState } from "react";
import { Modal } from "react-bootstrap";

// SUPAYA PENGGUNAAN MAPSTATE DAN DISPATCH BISA BERJALAN
import { connect } from "react-redux";

// IMPORT INI ADALAH UNTUK PENGGUNAAN DISPATCH TO PROPS
import { sembunyikanTambah, simpan } from "./../../actioncreators/guru";

const Add = (props) => {
  const [data,setData] = useState({
    nama: '',
    jurusan: ''
  })

  // CERITANYA KITA BUAT FUNCTION DENGAN NAMA HANDLECHANGE --- FOLLOW MY CODE (HC01)
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name] : value
    })

  }
  // PROPS INI BERASAL DARI ACTION CREATORS DAN DARI SNA KITA NGAMBIL "SEMBUNYIKANTAMBAH".
  // LIHATLAH IsShowAdd PADA REDUCERS.
  const hide = () => {
    props.sembunyikanTambah();
  };

  const save = () => {
    console.log(data);
    props.simpan(data)
  }
  return (
    // MENGIKUTI ALUR DARI BOOTSTRAP.
    <Modal show={props.show}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={hide}
            // SAAT DIKLIK AKAN MENTRIGGER FUNGSI HIDE.
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              className="form-control"
              id="nama"
              name="nama"
              onChange={handleChange}
              // HC-01 INI LAH PENGGUNAAN DARI FUNCTION YANG DIBUAT MENNGGUNAKAN CONST TADI.
              value={data.nama}
            />
          </div>
          <div className="form-group">
            <label for="jurusan">Jurusan</label>
            <input
              type="text"
              className="form-control"
              id="jurusan"
              name="jurusan"
              onChange={handleChange}
              value={data.jurusan}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={hide}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={save}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

// MAP INI KITA AMBIL DARI REDUCERS PADA GURU, KARENA HANYA DI REDUCERS KITA LEBIH PAKAI STATE.
// DISINI KITA MEMBUAT YANG DIATAS PROPS.SHOW MENJADI MENGGUNAKAN IsShowAdd. SEHINGGA BISA MNCUL
// LALU NENGOK AJA FUNCTION HIDE, ITU LAH PENGGUNAAN YANG TERJADI. HIDE DAN MUNCULKAN
const mapStateToProps = (state) => {
  return {
    show: state.guru.isShowAdd,
  };
};

const mapDispatchToProps = {
  sembunyikanTambah: sembunyikanTambah,
  simpan: simpan
 };

export default connect(mapStateToProps, mapDispatchToProps)(Add);
