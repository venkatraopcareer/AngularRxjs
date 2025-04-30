Merge Map 
https://www.tektutorialshub.com/angular/using-mergemap-in-angular/
The MergeMap create a one inner observable for each value of outer observable
`this.yourFirstService(data).pipe(
  map(res => // do what ever you want to do which first reques's response),
  mergeMap(() => this.yourSecondService())).subscribe( finalResponse => {

  });`
You need to call first service and then map it's response so you can do what ever you do with first service's response and then mergeMap second service. So this way you can resolve you issue.
of("hound", "mastiff", "retriever")        //outer observable
  .pipe(
    mergeMap(breed => {
      const url = 'https://dog.ceo/api/breed/' + breed + '/list';
      return this.http.get<any>(url)       //inner observable   
    })
  )
  .subscribe(data => {
    console.log(data)
  })


of("hound", "mastiff", "retriever")
  .subscribe(breed => {
    const url = 'https://dog.ceo/api/breed/' + breed + '/list';
 
    this.http.get<any>(url)
      .subscribe(data => {
        console.log(data)
      })
  })
