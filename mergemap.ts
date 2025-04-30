Merge Map 
https://www.tektutorialshub.com/angular/using-mergemap-in-angular/

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
