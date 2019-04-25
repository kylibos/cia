/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import '@polymer/paper-button/paper-button.js';

class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      css`
        #pageContainer {
          padding-top:60px;
          width:800px;
          margin:0 auto;
        }

        paper-button {
          background: var(--app-primary-color);
          color:white;
          font-size:12px;
          padding-left:50px;
          padding-right:50px;
          padding-top:15px;
          padding-bottom:15px;
        }

        .pointTitle {
          font-weight:800;
          font-family: 'Oswald', sans-serif;
          font-size:50px;
          text-align:right;
          line-height:1.2;
          flex:1;
        }

        .pointSummary {
          flex:1;
        }

        .point {
          display:flex;
          flex-direction:row;
          padding-top:30px;
        }
      `
    ];
  }

  render() {
    return html`
      <div id="pageContainer">
        <div class="block" style="display:flex; flex-direction:row;">
          <div style="flex:1; padding-top:30px;">
            <div style="font-weight:800; font-family: 'Oswald', sans-serif; font-size:48px;">PROFESSORES</div>
            <div style="line-height:1; font-weight:800; font-family: 'Oswald', sans-serif; font-size:94px;">NATIVOS</div>
            <div style="font-size:14px;padding-top:20px;padding-bottom:20px;">
              Ingles Autentico que Muda a Vida<br />Aulas Particulares com Professores Nativos
            </div>
            <div>
              <paper-button>Aula Gratuita</paper-button>
            </div>

          </div>
          <div style="flex:1; text-align:right;">
            <img style="width:350px;" src="images/heroImage.png" />
          </div>
        </div>

        <div id="pointList">
          <div class="point">
            <div class="pointTitle">
              AULAS<br />PRESENCIAIS
            </div>
            <div class="pointSummary">
              Só você e seu professor nativo.<br />
Suas aulas são moldadas para você.<br />
Pare de sentir travado quando fala e aprenda inglês mais rápido.
            </div>
          </div>
          <div class="point">
            <div class="pointTitle">
              AULAS<br />
              ONLINE
            </div>
            <div class="pointSummary"></div>
          </div>
          <div class="point">
            <div class="pointTitle">
              AULAS<br />IN-COMPANY
            </div>
            <div class="pointSummary"></div>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
