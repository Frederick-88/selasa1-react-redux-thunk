import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData, tampilkanTambah } from './../../actioncreators/guru'

import Add from './Add';
import Item from './Item';

const Main = (props) => {

    const handleClick = () => {
        props.tampilkanTambah()
    }

    // LIHATLAH DISPATCH ACTION-CREATOR DAN IMPORT" YANG ADA DISINI.
    useEffect(() => {
        props.getData()
    }, [])

    return (
        <div>
            <button onClick={handleClick}>Tambah</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Bidang Studi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item) => {
                            return (<Item key={item.id} data={item}/>)
                        })
                    }
                </tbody>
            </table>
            <Add/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.guru.data
    }
    
}
// LIHAT DARI APA YANG KAMU IMPORT, DISPATCH APAKAH YANG KAU IMPORT?
const mapDispatchToProps = { getData, tampilkanTambah }

export default connect(mapStateToProps, mapDispatchToProps)(Main);

// export default connect(null, mapDispatchToProps)(Main); --> apabila hanya ada FUNCTION MAP DISPATCH TO PROPS
// export default connect(mapStateToProps, null)(Main); --> apabila hanya ada FUNCTION MAP STATE TO PROPS