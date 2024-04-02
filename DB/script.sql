-- Active: 1702372197461@@127.0.0.1@3306@projetocacifo
Active: 1702372197461@@127.0.0.1@3306@projetocacifo

INSERT INTO cacifos (`idCacifo`, estado, Energia) VALUES ('', '0', '80');
INSERT INTO cacifos (`idCacifo`, estado, Energia) VALUES ('', '1', '20');
INSERT INTO cacifos (`idCacifo`, estado, Energia) VALUES ('', '2', '50');
INSERT INTO cacifos (`idCacifo`, estado, Energia) VALUES ('', '0', '40');
INSERT INTO cacifos (`idCacifo`, estado, Energia) VALUES ('', '1', '10');
INSERT INTO cacifos (`idCacifo`, estado, Energia) VALUES ('', '2', '25');

INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Estudante');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Estudante');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Professor');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Funcionario');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Estudante');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Professor');
INSERT INTO estatuto (`idEstatuto`, `Cargo`) VALUES ('', 'Estudante');

INSERT INTO planos (`idPlano`, `nome_plano`, plano_preco) VALUES ('', 'basico', '0€');
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

INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Janeiro');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Fevereiro');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Março');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Abril');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Maio');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Junho');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Julho');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Agosto');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Setembro');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Outubro');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Novembro');
INSERT INTO estatisticas (`idEstatisticas`, `EnergiaTotal`, `LucroTotal`, `Prejuizo`, `Mes`) VALUES ('', '', '', '', 'Dezembro');

