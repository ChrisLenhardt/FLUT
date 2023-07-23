export default function Header(){
    return(
        <div>
        <header>
          <a class="logo" href='/'>
            <p class="logoP1">Bimmer</p>
            <p>Book</p>
            <div class="headerBar">
              <table class="headerTable" cellSpacing={10}>
                <tr>
                  <td class='tableData'>
                    <a class="headElem" href="/signup">
                    REGISTER
                    </a>
                  </td>
                  <td class='tableData'>
                    <a class="headElem" href='#'>
                    SEARCH
                    </a>
                  </td>
                  <td class='tableData'>
                    <a class="headElem" href='#'>
                    POST
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </a>
        </header>
      </div>
    )
}