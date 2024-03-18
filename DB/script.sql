-- Active: 1702372197461@@127.0.0.1@3306@projetocacifo
INSERT INTO cacifos (`idCacifo`, estado) VALUES ('', '0');
INSERT INTO cacifos (`idCacifo`, estado) VALUES ('', '1');
INSERT INTO cacifos (`idCacifo`, estado) VALUES ('', '2');
INSERT INTO cacifos (`idCacifo`, estado) VALUES ('', '0');
INSERT INTO cacifos (`idCacifo`, estado) VALUES ('', '1');
INSERT INTO cacifos (`idCacifo`, estado) VALUES ('', '2');

INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Estudante');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Professor');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Funcionario');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Estudante');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Professor');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Estudante');

INSERT INTO planos (`idPlano`, `nome_plano`, plano_preco) VALUES ('', 'basico', '0€');
INSERT INTO planos (`idPlano`, `nome_plano`, plano_preco) VALUES ('', 'gold', '10€');
INSERT INTO planos (`idPlano`, `nome_plano`, plano_preco) VALUES ('', 'premium', '20€');

INSERT INTO trotinetes (`idTrotinete`, estado_bateria) VALUES ('', '20%');
INSERT INTO trotinetes (`idTrotinete`, estado_bateria) VALUES ('', '30%');
INSERT INTO trotinetes (`idTrotinete`, estado_bateria) VALUES ('', '70%');
INSERT INTO trotinetes (`idTrotinete`, estado_bateria) VALUES ('', '10%');
INSERT INTO trotinetes (`idTrotinete`, estado_bateria) VALUES ('', '50%');
INSERT INTO trotinetes (`idTrotinete`, estado_bateria) VALUES ('', '90%');


INSERT INTO utilizadores (`IdUtilizador`, email_utilizador, nome_utilizador, estatuto_utilizador, idplano, data_adesao, password_utilizadores) VALUES ('', '202300703@estudantes.ips.pt', 'Vinicius', 'Admin', '9', '2024/03/14', '12345678');

INSERT INTO utilizadores (`IdUtilizador`, email_utilizador, nome_utilizador, estatuto_utilizador, idplano, data_adesao, password_utilizadores) VALUES ('', '202301059@estudantes.ips.pt', 'André', 'Admin', '8', '2024/03/14', '12345678');

INSERT INTO utilizadores (`IdUtilizador`, email_utilizador, nome_utilizador, estatuto_utilizador, idplano, data_adesao, password_utilizadores) VALUES ('', '202301062@estudantes.ips.pt', 'Tiago', 'Admin', '7', '2024/03/14', '12345678');

INSERT INTO utilizadores (`IdUtilizador`, email_utilizador, nome_utilizador, estatuto_utilizador, idplano, data_adesao, password_utilizadores) VALUES ('', '202300100@estudantes.ips.pt', 'Jose', 'Estudante', '9', '2024/03/14', '12345678');

