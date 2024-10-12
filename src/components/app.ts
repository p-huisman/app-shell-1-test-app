import {LitElement, css, html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {
  allComponents,
  provideFluentDesignSystem,
} from "@fluentui/web-components";
provideFluentDesignSystem().register(allComponents);

@customElement("test-app")
export class TestAppElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .tab-panel {
      margin-top: 1em;
    }
    .label {
      display: block;
      color: var(--neutral-foreground-rest);
      cursor: pointer;
      font-family: var(--body-font);
      font-size: var(--type-ramp-base-font-size);
      line-height: var(--type-ramp-base-line-height);
      font-weight: initial;
      font-variation-settings: var(--type-ramp-base-font-variations);
      margin-bottom: 4px;
    }
  `;

  @property({type: String})
  activeTabId = "persoon";

  render() {
    return html`
      <div class="tablist-container">
        <fluent-tabs activeid="persoon">
          <fluent-tab id="persoon">Persoon</fluent-tab>
          <!-- <fluent-tab id="instantie">Instantie</fluent-tab> -->
          <fluent-tab-panel class="tab-panel" id="persoonPanel">
            <div style="display: flex; flex-direction: row; gap: .5em">
              <fluent-text-field>Persoonsnummer</fluent-text-field>
              
              <div style="display: flex; flex-direction: column;">
                <label part="label" class="label">Instantie</label>
                <fluent-select title="Selecteer">
                  <fluent-option value="1">124</fluent-option>
                  <fluent-option value="2">123</fluent-option>
                  <fluent-option value="3">122</fluent-option>
                </fluent-select>
              </div>
              <fluent-text-field>Tijdvak</fluent-text-field>
              
              <div style="display: flex; flex-direction: column;align-self: end">
                
                <fluent-button>Weergeven</fluent-button>
                </div>
              
            </div>
          </fluent-tab-panel>

          <!-- <fluent-tab-panel id="instantiesPanel"> </fluent-tab-panel> -->
        </fluent-tabs>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "test-app": TestAppElement;
  }
}
