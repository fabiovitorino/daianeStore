angular.module('app.services', [])

.factory('procurarService', function($http){
   var dados = {};
    return {
        procurar: function(fworkFiltro) {
        var param = {fworkEvento: 'procurarIgreja^IASDLocalCtrl', fworkProgramaCgi:'IASDLocalCtrl', fworkFiltro: fworkFiltro};
        return $http({
            method  : 'GET',
            url     : 'http://igrejaonline.fabiotech.com.br/cgi-bin/iasdWeb.cgi',
            params    : param
            }).then(function(response) {
                dados = response.data;
                return dados;
            });
        }
    }
})

.factory('serviceDBLocal', function($q) {
    var db;
    
    function createDB() {
        try {
            db = openDatabase("igrejaDB","1.0","Banco Local",1000);
            db.transaction( function(tx) {
                tx.executeSql("CREATE TABLE IF NOT EXISTS igrejaTab(idIgreja INTEGER PRIMARY KEY ASC, codAssociacao INTEGER, codIgreja INTEGER);",[]); 
            });
        } catch (err){
            alert('Erro: '+ err)    
        }
    }
    
    function read() {
        return promessaQuery('SELECT * from igrejaTab', callBackSucesso, callBackErro);
        }
    
    function createIgreja(codAssociacao,codIgreja) {
        //alert(codAssociacao+','+codIgreja);
        return promessaQuery('INSERT INTO igrejaTab(codAssociacao,codIgreja) VALUES(' + codAssociacao + ',' + codIgreja + ')', callBackSucesso, callBackErro);
    }
    
    function update(idIgreja,codAssociacao,codIgreja) {
        return promessaQuery('UPDATE igrejaTab SET codAssociacao = ' + codAssociacao + ', codIgreja = ' + codIgreja + ' WHERE idIgreja = ' + idIgreja, callBackSucesso, callBackErro);
        }

    function deleteIgreja(idIgreja) {
        return promessaQuery('DELETE FROM igrejaTab WHERE idIgreja = ' + idIgreja, callBackSucesso, callBackErro);
        }

    function promessaQuery(query, sucessCallBack, errorCallBack){
        var deferido = $q.defer();
        db.transaction( function(tx) {
            tx.executeSql(query, [], sucessCallBack(deferido), errorCallBack(deferido));
        });
        return deferido.promise;
    }
    
    function callBackSucesso(deferido){
        return function(tx, results){
            var len = results.rows.length, i;
            var resultados = [];
            for (i = 0; i < len; i++) {
                var igreja = {
                    idIgreja : results.rows.item(i).idIgreja,
                    codAssociacao : results.rows.item(i).codAssociacao,
                    codIgreja : results.rows.item(i).codIgreja
                }
                resultados.push(igreja);
            }
            deferido.resolve(resultados)
        };
    }
    
    function callBackErro(deferido){
        return function(tx, results){
            var resultados = [];
            deferido.resolve(resultados);
        };
    }
    
    return {
        createDB: function(){
            return createDB();
        },
        read: function(){
            return read();
        },
        createIgreja: function(codAssociacao,codIgreja){
            return createIgreja(codAssociacao,codIgreja);
        },
        deleteIgreja: function(idIgreja){
            return deleteIgreja(idIgreja);
        }

    }
})

.service('BlankService', [function(){

}]);

