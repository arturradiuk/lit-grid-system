import {css, unsafeCSS} from "lit";

const row = css`
  .row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .row > div[class*="col"] {
  }
`

const getRegularColumns = () => {
    return [...Array(12)].map((e, numb) => {
            ++numb
            return css`
              .row > .col-${numb} {
                grid-column: auto/span ${numb};
              }
            `
        }
    ).join('')
}

const getResponsiveColumns = () => {
    const columnTypes = [
        {
            infix: "md",
            width: 768
        },
        {
            infix: "xl",
            width: 1200
        }
    ]
    return columnTypes.map(colType =>
        [...Array(12)].map((e, numb) => {
            ++numb;
            return css`

              .row .col-${unsafeCSS(colType.infix + "-" + numb)} {
                grid-column: auto/span ${unsafeCSS(numb)};
              }

              @media only screen and (max-width: ${unsafeCSS(colType.width)}px) {
                .row .col-${unsafeCSS(colType.infix + "-" + numb)} {
                  grid-column: auto/span 12;
                }
              }
            `
        }).join('')
    ).join('')
}

const columns = css`
  ${unsafeCSS(getRegularColumns())}
  ${unsafeCSS(getResponsiveColumns())}
`

export const litGrid = [columns, row]