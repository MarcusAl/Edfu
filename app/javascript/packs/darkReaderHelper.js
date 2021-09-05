const DarkReader = require('darkreader');

export const darkReaderHelper = () => {
  document.addEventListener('turbolinks:load', () => {
    const dark_btn = document.getElementById(
      'dark_mode_btn'
    );
    let isEnabled = false;
    dark_btn.addEventListener('click', (event) => {
      if (isEnabled) {
        DarkReader.disable();
        isEnabled = false;
      } else {
        DarkReader.enable({
          brightness: 100,
          contrast: 100,
          sepia: 10,
        });
        isEnabled = true;
      }
    });
  });
};
