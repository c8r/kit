module.exports.log = msg => console.log(msg)

module.exports.complete = msg => console.log(`✅  ${msg}`)

module.exports.error = (e, msg) => {
  console.log(`❌ ${msg}`)
  console.log(e)
}
