const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({"width":981,"height":745})
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("https://forms.office.com/pages/responsepage.aspx?id=CClghVvhukORSDi8dzqBboGypAi_F19Pg12Ch2He6NVUMUU5VVRDUEdaNTdIRzNPRUpGM1daU01KMS4u");
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/1, Adın nedir ? Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(2) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 555.1999969482422,
            y: 30.399993896484375,
          },
        });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/1, Adın nedir ? Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(2) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("A");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("A");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "A");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/1, Adın nedir ? Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(2) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Armagan");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Armagan");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Armagan");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/2, Soyadın nedir ? Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(3) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 215.1999969482422,
            y: 11.29998779296875,
          },
        });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/2, Soyadın nedir ? Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(3) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("S");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("S");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "S");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/2, Soyadın nedir ? Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(3) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Sisik");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Sisik");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Sisik");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/3, Mail Hesabın ? Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(4) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 141.1999969482422,
            y: 1.20001220703125,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/3, Mail Hesabın ? Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(4) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("armagansisik@gmail.com");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("armagansisik@gmail.com");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "armagansisik@gmail.com");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/4, Telefon Numaran Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(5) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 84.19999694824219,
            y: 29.100006103515625,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/4, Telefon Numaran Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(5) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("05303689329");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("05303689329");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "05303689329");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 99.19999694824219,
            y: 24.600006103515625,
          },
        });
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Y");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Y");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Y");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız ");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız ");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız ");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız T");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız T");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız T");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız Teknik ");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız Teknik ");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız Teknik ");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız Teknik Ü");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız Teknik Ü");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız Teknik Ü");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız Teknik Üniversitesi");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız Teknik Üniversitesi");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız Teknik Üniversitesi");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız Teknik Üniversitesi/");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız Teknik Üniversitesi/");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız Teknik Üniversitesi/");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız Teknik Üniversitesi/M");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız Teknik Üniversitesi/M");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız Teknik Üniversitesi/M");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız Teknik Üniversitesi/Matematik");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız Teknik Üniversitesi/Matematik");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız Teknik Üniversitesi/Matematik");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız Teknik Üniversitesi/Matematik/");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız Teknik Üniversitesi/Matematik/");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız Teknik Üniversitesi/Matematik/");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/5, Üniversite Öğrencisiysen Üniversite/Bölüm/Kaçıncı Sınıf, Lise Öğrencisiysen Lise/Kaçıncı Sınıf Yanıtlanması gerekiyor Yanıtlanması gerekiyor. Tek satır metin. "],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-question-body > div:nth-child(6) > div > div.office-form-question-element > div > div > input"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Yıldız Teknik Üniversitesi/Matematik/2");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Yıldız Teknik Üniversitesi/Matematik/2");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Yıldız Teknik Üniversitesi/Matematik/2");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/İleri","aria/[role=\"generic\"]"],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-navigation-container > div.office-form-button-container > button > div"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 109.19999694824219,
            y: 6.600006103515625,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Gönder","aria/[role=\"generic\"]"],["#form-container > div > div > div.office-form-content.office-form-page-padding > div > div.office-form.office-form-theme-shadow > div.office-form-body > div.office-form-navigation-container > div.office-form-button-container > button.office-form-theme-primary-background.office-form-theme-button.office-form-bottom-button.button-control.light-background-button.__submit-button__ > div"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 66.19998168945312,
            y: 7.899993896484375,
          },
        });
    }

    await browser.close();

    async function waitForSelectors(selectors, frame, options) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, options);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(element, timeout) {
      await waitForConnected(element, timeout);
      const isInViewport = await element.isIntersectingViewport({threshold: 0});
      if (isInViewport) {
        return;
      }
      await element.evaluate(element => {
        element.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'auto',
        });
      });
      await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
      await waitForFunction(async () => {
        return await element.getProperty('isConnected');
      }, timeout);
    }

    async function waitForInViewport(element, timeout) {
      await waitForFunction(async () => {
        return await element.isIntersectingViewport({threshold: 0});
      }, timeout);
    }

    async function waitForSelector(selector, frame, options) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to waitForSelector');
      }
      let element = null;
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (element) {
          element = await element.waitForSelector(part, options);
        } else {
          element = await frame.waitForSelector(part, options);
        }
        if (!element) {
          throw new Error('Could not find element: ' + selector.join('>>'));
        }
        if (i < selector.length - 1) {
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('|'));
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const count = step.count || 1;
      const operator = step.operator || '>=';
      const comp = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      };
      const compFn = comp[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        return compFn(elements.length, count);
      }, timeout);
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to querySelectorAll');
      }
      let elements = [];
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (i === 0) {
          elements = await frame.$$(part);
        } else {
          const tmpElements = elements;
          elements = [];
          for (const el of tmpElements) {
            elements.push(...(await el.$$(part)));
          }
        }
        if (elements.length === 0) {
          return [];
        }
        if (i < selector.length - 1) {
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
        }
      }
      return elements;
    }

    async function waitForFunction(fn, timeout) {
      let isActive = true;
      setTimeout(() => {
        isActive = false;
      }, timeout);
      while (isActive) {
        const result = await fn();
        if (result) {
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }
})();
