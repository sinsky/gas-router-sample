# GAS Router Sample

## using the test

1. this repository is pull
2. project is build

    build command - sample

    ```shell
    yarn
    yarn build
    ```

3. GAS project is push

    GAS project files - sample

    ```gas
    // code.gs
    const doGet = () => HtmlService.createHtmlOutputFromFile("dist/index");
    ```

    ```html
    <!-- dist/index.html -->
    Contents of dist/index.html
    ```

4. GAS project is deploy! and your try!
