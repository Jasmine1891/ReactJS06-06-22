import './TableDesign.css'
const TableDesign=()=>{
    return(
        <div>
        <h1>Table with meged cells and columns</h1>
        <table className="table">
        <tr>
            <td className='td1' rowSpan={3}>Table1</td>
            <td className='td3'colSpan={2}><table className='child-table'>
                <tr>
                    <td>Table2</td>
                    <td>Table2</td>
                </tr>
                <tr>
                <td>Table2</td>
                    <td>Table2</td>
                </tr>
                </table></td>
        </tr>
        <tr>
        
            <td className='td2'>table2</td>
            <td className='td2'>table2</td>
        </tr>
        <tr>
            <td className='td2'>table2</td>
            <td className='td2'>table2</td>
        </tr>
        <tr>
            <td>table1</td>
            <td colSpan={2}>table1</td>
        </tr>
        </table>
        </div>
    );
}
export default TableDesign;