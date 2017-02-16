function LoadAdditionalData()
{
    //create the queryUrl to be used in the service call
    var query = "http://dataprovence.cloudapp.net:8080/v1/dataprovencetourisme/ParcsEtJardins?&format=json&callback=?";
    var filter = "";
    var queryUrl = query + filter;
    //make jquery call to service
    $.getJSON(queryUrl, null, AdditionalData_Loaded);
}
