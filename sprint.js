fetch('sprint2.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.forEach(item => {
      console.log(`Shape: ${item.shape}`);
    });

    const description1 = getDescription1(data);
    const description2 = getDescription2(data);
    const description3 = getDescription3(data);

    writeToBrowser(description1 + "<br>" + description2 + "<br>" + description3);
  })
  .catch(error => console.error('Error fetching data:', error));

function getDescription1(data) {
  return `Total records in JSON: ${data.length}`;
}

function getDescription2(data) {
  const ongoing = data.filter(item => item.status === 'ongoing').length;
  const terminated = data.filter(item => item.status === 'termanated').length;
  return `Ongoing: ${ongoing}, Terminated: ${terminated}`;
}

function getDescription3(data) {
  const dates = data.map(item => new Date(item.date));
  const earliestDate = new Date(Math.min(...dates)).toLocaleDateString();
  const latestDate = new Date(Math.max(...dates)).toLocaleDateString();
  return `Earliest Date: ${earliestDate}, Latest Date: ${latestDate}`;
}

function writeToBrowser(content) {
  document.body.innerHTML = content;
}
