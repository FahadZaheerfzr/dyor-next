
export default function handler(req, res) {

    // Get the data from the request body
    const profile_picture = req.body.profile_picture
    const developer_name = req.body.developer_name
    const developer_about = req.body.developer_about
    const developer_wallet = req.body.developer_wallet
    const developer_website = req.body.developer_website    
    const developer_twitter = req.body.developer_twitter
    const developer_telegram = req.body.developer_telegram
    const contract_address = req.body.contract_address
    const telegram_project = req.body.telegram_project

    

    


    res.status(200).json({ name: 'John Doe' })
  }
  