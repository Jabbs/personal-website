require 'csv'

namespace :emily do
  desc 'Reformat chart'
  task :compute_table => :environment do

    map = {}
    map["1951-1955"] = 0
    map["1956-1960"] = 0
    map["1961-1965"] = 0
    map["1966-1970"] = 0
    map["1971-1975"] = 0
    map["1976-1980"] = 0
    map["1981-1985"] = 0
    map["1986-1990"] = 0
    map["1991-1995"] = 0
    map["1996-2000"] = 0
    map["2001-2005"] = 0
    map["2006-2010"] = 0
    map["2011-2015"] = 0
    map["2016-2020"] = 0
    total = 0

    CSV.foreach('lib/assets/1112.csv', headers: true, :encoding => 'windows-1251:utf-8') do |row|
      next unless row[0].present?
      year = Date.strptime(row[0].strip,'%m/%d/%Y').year
      sales = row[1].strip.to_i
      total = total + sales

      if year >= 1951 && year <= 1955
        map["1951-1955"] += sales
      elsif year >= 1956 && year <= 1960
        map["1956-1960"] += sales
      elsif year >= 1961 && year <= 1965
        map["1961-1965"] += sales
      elsif year >= 1966 && year <= 1970
        map["1966-1970"] += sales
      elsif year >= 1971 && year <= 1975
        map["1971-1975"] += sales
      elsif year >= 1976 && year <= 1980
        map["1976-1980"] += sales
      elsif year >= 1981 && year <= 1985
        map["1981-1985"] += sales
      elsif year >= 1986 && year <= 1990
        map["1986-1990"] += sales
      elsif year >= 1991 && year <= 1995
        map["1991-1995"] += sales
      elsif year >= 1996 && year <= 2000
        map["1996-2000"] += sales
      elsif year >= 2001 && year <= 2005
        map["2001-2005"] += sales
      elsif year >= 2006 && year <= 2010
        map["2006-2010"] += sales
      elsif year >= 2011 && year <= 2015
        map["2011-2015"] += sales
      elsif year >= 2016 && year <= 2020
        map["2016-2020"] += sales
      end

    end

    map.each do |item|
      puts item[0] + "," + item[1].to_s
    end
    puts "-------"
    puts total

  end
end
