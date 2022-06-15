import {css, unsafeCSS} from "lit";
import {defaultParameters} from "./grid-parameters";

const getRow = (parameters) => {
    return css`
      .row {
        display: grid;
        grid-template-columns: repeat(${unsafeCSS(parameters.numberOfColumns)}, 1fr);
      }

      .justify-items-stretch {
        justify-items: stretch;
      }

      .justify-items-start {
        justify-items: start;
      }

      .justify-items-end {
        justify-items: end;
      }

      .justify-items-center {
        justify-items: center;
      }

      .align-items-center {
        align-items: center;
      }
      
      .align-items-start {
        align-items: start;
      }
      
      .align-items-end {
        align-items: end;
      }
      
      .align-items-stretch {
        align-items: stretch;
      }
    `
}

const getRegularColumns = (parameters) => {
    return [...Array(parameters.numberOfColumns)].map((e, numb) => {
            ++numb
            return css`
              .row > .col-${numb} {
                grid-column: auto/span ${numb};
              }
            `
        }
    ).join('')
}

const getResponsiveColumns = (parameters) => {
    const {numberOfColumns, columnTypes} = parameters
    return columnTypes.map(colType =>
        [...Array(numberOfColumns)].map((e, numb) => {
            ++numb;
            return css`

              .row .col-${unsafeCSS(colType.infix + "-" + numb)} {
                grid-column: auto/span ${unsafeCSS(numb)};
              }

              @media only screen and (max-width: ${unsafeCSS(colType.width)}px) {
                .row .col-${unsafeCSS(colType.infix + "-" + numb)} {
                  grid-column: auto/span ${unsafeCSS(numberOfColumns)};
                }
              }
            `
        }).join('')
    ).join('')
}

export const getLitGrid = (parameters = defaultParameters) => {
    return [css`
      ${unsafeCSS(getRegularColumns(parameters))}
      ${unsafeCSS(getResponsiveColumns(parameters))}
      ${unsafeCSS(getRow(parameters))}
    `]
}
