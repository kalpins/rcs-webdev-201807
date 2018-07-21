# Tipi un kompetences jeb types and scopes

## Tipi

Pastāv 2 veidu tipi:
Primitīvie un Norādes tipi

### Primitīvie

                            Atmiņa
                    ---------------------------------
                    |    -----                      |
    var a = 5  -----+--> | 5 |                      |
                    |    -----        -----         |
    var b= a   -----+---------------> | 5 |         |
                    |                 -----         |
                    ---------------------------------

### Norādes (reference)

                            Atmiņa
                    ---------------------------------
                    |                               |
    var a = {a:5} --+--------------> -------        |
                    |                | a:5 |        |
    var b= a   -----+--------------> -------        |
                    |                               |
                    ---------------------------------

