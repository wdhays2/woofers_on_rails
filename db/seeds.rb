require 'csv'

filename = "#{Rails.root}/data/test_woofers.csv"

CSV.foreach(filename, headers: true) do |row|
  # find mfg
  mfg = Manufacturer.where(name: row[2]).first
  # create if it doesn't exist
  mfg = Manufacturer.create(name: row[2]) if mfg.nil?
  # enter driver info for mfg
  Driver.create(
    manufacturer_id: mfg.id,
    size: row[0],
    cut_out: row[1],
    model_no: row[3],
    link: row[4],
    resistance: row[5],
    rms_power: row[6],
    sensitivity: row[7],
    x_max: row[8],
    fs: row[9],
    vas: row[10],
    qts: row[11],
    sealed_volume: row[12],
    sealed_f3: row[13],
    vented_volume: row[14],
    vented_f3: row[15],
    low_frequency_limit: row[16],
    high_frequency_limit: row[17]
  )
end
